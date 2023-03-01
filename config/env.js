module.exports = {
    allowClient: [],
    email: {
        service: '163', // 邮箱服务商
        port: 465, // SMTP 端口
        secureConnection: true, // 使用 SSL
        auth: {
            user: 'wzy0809001@163.com',
            // smtp授权码
            pass: 'DHPYKEXTBJDZFZEO'
        }
    },
    authorEmail: 'wzy0809001@163.com',
    blogName: '振宇的博客',
    cookieExpireDate: 3,
    siteURL: 'https://blog.me'
}