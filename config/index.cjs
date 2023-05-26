/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe9d970c5c5ba9569',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '76d450adc0101a6275aa333d4d52da9a',

  PROVINCE: '四川',
  CITY: '成都',
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '王老师',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: ' gh_e9440b900039',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Be-MMxIxTP93a7RIVf9uCHPAB06c8nONeMpax2g7gy8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '王老师', year: '2001', date: '05-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '余健康', year: '2001', date: '03-04',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '05-24',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        //{ keyword: 'love_day', date: '2023-05-24' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2023-05-24' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	nWUcrRhKoyK4d6egfiIYEKRDSF8RDt48m0RixaaHqIs',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oO8Bl6CePJX2nTyOrZHxOjMwequU',
    }
  ],

}

module.exports = USER_CONFIG

