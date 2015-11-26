function(doc, req) {
    var template = require("lib/template");
    return {
        body: template.render(this.templates.tweet, {
            tweet: doc,
        }),
    };
}
