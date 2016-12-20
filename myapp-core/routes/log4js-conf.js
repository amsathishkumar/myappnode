var log4js = require( 'log4js' );

//var log_pattern = "%[%d{ISO8601}, DMP, %-15c, %-5p, %] %m"; // move to this pattern in order to have dmp aligned with IH logging guidelines
var log_pattern = "%[%d{yyyy-MM-dd hh:mm:ss.SSS} [%x{pid}] %-5p %-15c %] %m";

if (!process.env.NODE_ENV) {
    //log_pattern = "%d{ISO8601}, DMP, %-15c, %-5p, %m"; // move to this pattern in order to have dmp aligned with IH logging guidelines
    log_pattern = "%d{ISO8601} [%x{pid}] %-5p %-15c %m";
}

var log4js_conf = {

    "appenders": [ {
        "type": "logLevelFilter",
        "level": "DEBUG",
        "appender": {
            "type": "console",
            "layout": {
                "type": "pattern",
                "pattern": log_pattern,
                "tokens": {
                    pid: function () {
                        return process.pid;
                    }
                }
            }
        }
    }
    ],

    replaceConsole: true
};

log4js.configure( log4js_conf, {} );
exports.logging = log4js;
