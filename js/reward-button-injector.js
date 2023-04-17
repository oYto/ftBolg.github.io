hexo.extend.injector.register('body_end', function () {
    const {
        enable,
        btn_icon,
        btn_text,
        comment,
        qrcodes,
    } = hexo.config.reward_button;

    if (!enable) {
        return null;
    }

    return `
    <link defer rel="stylesheet" href="/css/reward-button.css"/>
    <script src="/js/reward-button.js"></script>
    <script>
        new RewardButton({
            btnIcon: ${btn_icon ? `"${btn_icon}"` : "null"},
            btnText: "${btn_text}",
            comment: "${comment}",
            qrcodes: ${JSON.stringify(qrcodes)}
        }).init();
    </script>
    `
}, "post");
