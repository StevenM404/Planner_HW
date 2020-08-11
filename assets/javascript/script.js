$("#currentDay").text(moment().format("dddd, MMMM, Do"));

$(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var activity = $(this).parent().children("input").val();

    localStorage.setItem(time, activity);
    console.log(time, activity);
});

$("#9am").children("input").val(localStorage.getItem("9am"));
$("#10am").children("input").val(localStorage.getItem("10am"));
$("#11am").children("input").val(localStorage.getItem("11am"));
$("#12pm").children("input").val(localStorage.getItem("12pm"));
$("#1pm").children("input").val(localStorage.getItem("1pm"));
$("#2pm").children("input").val(localStorage.getItem("2pm"));
$("#3pm").children("input").val(localStorage.getItem("3pm"));
$("#4pm").children("input").val(localStorage.getItem("4pm"));
$("#5pm").children("input").val(localStorage.getItem("5pm"));

var hour = ["9","10", "11", "12", "13", "14", "15", "16", "17"]

function colorChange() {
    var currentHour = moment().format('H');
    for(var i = 0; i < hour.length; i++) {
        if (parseInt(hour[i])> currentHour) {
            $("#" + hour[i]).addClass("future").removeClass("past", "present");
        } else if(parseInt(hour[i])< currentHour) {
            $("#" + hour[i]).addClass("past").removeClass("future", "present");
        } else if(parseInt(hour[i]) == currentHour) {
            $("#" + hour[i]).addClass("present").removeClass("future", "past");
        }
    }
}

colorChange();