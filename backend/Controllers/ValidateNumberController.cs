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
            // ここで想定されている数字を定義します
            int expected = 42;

            // 入力された数字が想定されている数字と一致するかどうかを判定します
            bool isValid = number == expected;

            // 結果をJSON形式で返します
            return Ok(new { isValid });
        }

        // POST api/validate-number
        [HttpPost]
        public IActionResult Post([FromBody] NumberModel model)
        {
            // モデルの入力値検証を行います
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // ここで想定されている数字を定義します
            int expected = 42;

            // 入力された数字が想定されている数字と一致するかどうかを判定します
            bool isValid = model.Number == expected;

            // 結果をJSON形式で返します
            return Ok(new { isValid });
        }
    }

    // 入力値を受け取るためのモデルクラスです
    public class NumberModel
    {
        // 必須入力と範囲の検証を行う属性を付けます
        [Required]
        [Range(0, 100)]
        public int Number { get; set; }
    }
}