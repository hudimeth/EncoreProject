using EncoreProject.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EncoreProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ZmanimController : ControllerBase
    {
        [HttpGet]
        [Route("getzmanim")]
        public async Task<ZmanimTime> GetZmanim(DateTime date, string zipCode)
        {
            var zmanimRepository = new ZmanimRepository();
            return await zmanimRepository.ZmanimForDate(date,zipCode );
        }
    }
}
