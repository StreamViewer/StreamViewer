function set(name, attr, value) {
    var e = document.getElementsByClassName(name);
    var i = e.length;

    var attrs = attr.split('.');

    while(i--) {
        var elem = e[i];

        for (var j = 0; j < attrs.length - 1; j++) {
            elem = elem[attrs[j]];
        }

        elem[attrs[j]] = value;
    }
}

function getCookie(name) {
    var cookies = document.cookie.split(';');

    var i = cookies.length;
    while (i--) {
        var c = cookies[i].trim();

        if (c.substring(0, name.length) == name) {
            return c.substring(name.length, c.length);
        }
    }

    return null;
}

function destroy(e) {
    e.parentNode.removeChild(e);
}