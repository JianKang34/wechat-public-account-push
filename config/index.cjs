/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 请将以下代码按照图示粘贴到对应位置
  //USE_PASSAGE: 'push-plus',
  
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe9d970c5c5ba9569',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '76d450adc0101a6275aa333d4d52da9a',

  PROVINCE: '四川',
  CITY: '成都',

  USERS: [
    {
      // 想要发送的人的名字
      name: '王晓洁',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      //id: '5f1ec53e6d37432bb09eeea123bbc384',
      id: 'oO8Bl6CePJX2nTyOrZHxOjMwequU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '93toZhw-nrOel33fjnCOhTs3T915jKL7FECWSyY3BVs',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-07',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '王晓洁', year: '2001', date: '03-14',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '王晓洁', year: '2001', date: '04-07',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '05-24',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-05-24' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'nWUcrRhKoyK4d6egfiIYEKRDSF8RDt48m0RixaaHqIs',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oO8Bl6CePJX2nTyOrZHxOjMwequU',
    }
  ],

}

module.exports = USER_CONFIG
