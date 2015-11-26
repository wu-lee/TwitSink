function(head, req) {
    var template = require("lib/template");
    start({
        headers: {
            'Content-Type': 'text/html',
        },
    });
    
    send(template.render(this.templates.tweets_head, {}));
    var row;
    while(row = getRow()) {
        send(template.render(this.templates.tweets_item, {
            req: req,
            tweet: row.value,
        }));
    }

    send(template.render(this.templates.tweets_foot, {}));
}