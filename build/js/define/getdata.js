define(["jquery","filldata"],function(e,o){var n=function(){e.getJSON("../../data/data.json",function(e){var o=e.employees;return console.log(o),o}),console.log("---===getdataq===---"),o.fill(),console.log("---===getdata===---")};return n});