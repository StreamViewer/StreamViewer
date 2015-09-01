// expire is in milliseconds
function setCookie(name, value, expire) {
    var d = new Date();
    d.setTime(d.getTime() + expire);

    document.cookie = name + '=' + value + '; expires=' + d.toUTCString();
}

function getCookie(name) {
    var ca = document.cookie.split(';');

    var i = ca.length;
    while (i--) {
        var c = ca[i].trim();
        if (c.trim().indexOf(name) == 0) {
            return c.substring(name.length + 1, c.length);
        }
    }
}

var utils = new (function() {
    this.get = function(selector) {

    };

    this.set = function(selector, attribute, value) {
        var attrs = attribute.split('.');

        document.querySelectorAll(selector).forEach(function(e) {
            var c = e;

            for (var i = 0, length = attrs.length; i < length - 1; i++) {
                c = c[attrs[i]];
            }

            c[attrs[i]] = value;
        });
    };


})();