/*! 
 * do-a-barrel-roll v1.0.0
 * https://github.com/lisandro-jofre/do-a-barrel-roll
 *
 * Released under the MIT license
 * https://github.com/lisandro-jofre/do-a-barrel-roll/blob/master/LICENSE
 *
 * (c) 2018 Lisandro Jofré
 */

(function() {
    var styles = document.createElement("style");
    styles.innerHTML = "@-moz-keyframes roll{100%{-moz-transform:rotate(360deg)}}@-o-keyframes roll{100%{-o-transform:rotate(360deg)}}@-webkit-keyframes roll{100%{-webkit-transform:rotate(360deg)}}.do-a-barrel-roll{-moz-animation-duration:2s;-moz-animation-name:roll;-moz-animation-iteration-count:1;-webkit-animation-duration:2s;-webkit-animation-name:roll;-webkit-animation-iteration-count:1;-o-animation-duration:2s;-o-animation-name:roll;-o-animation-iteration-count:1}";
    document.getElementsByTagName("head")[0].appendChild(styles);

    var keyed = "";
    document.addEventListener("keypress", function(event) {
        keyed += String.fromCharCode(event.charCode);
        if (event.charCode === 13 && keyed.toLowerCase().indexOf("doabarrelroll") !== -1) {
            document.body.classList.add("do-a-barrel-roll");
            setTimeout(function() {
                document.body.classList.remove("do-a-barrel-roll");
                keyed = "";
            }, 2000);
        }
    });
})();
