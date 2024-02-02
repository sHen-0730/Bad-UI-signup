using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValidateNumberController : ControllerBase
    {
        // GET api/validate-number?number=42
        [HttpGet]
        public IActionResult Get([FromQuery] int number)
        {
            int expected = 42;

            bool isValid = number == expected;

            return Ok(new { isValid });
        }

        // POST api/validate-number
        [HttpPost]
        public IActionResult Post([FromBody] NumberModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int expected = 42;

            bool isValid = model.Number == expected;

            return Ok(new { isValid });
        }
    }

    // 入力値を受け取るためのモデルクラス
    public class NumberModel
    {
        [Required]
        [Range(0, 100)]
        public int Number { get; set; }
    }
}