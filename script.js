
const containerDiv = $(".container");
const today = moment().format('MMMM Do YYYY');
const timeSlots = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

function startDay() {
    $("#currentDay").text(today);

    // for (var i = 0; i < 8; i++) {
    for (i = 0; i < timeSlots.length; i++) {
        var timeSlot = $('<div class="row">');
        // var taskInput = $(`<input id=task-${i}>`)
        var taskInput = $("<textarea>");
        taskInput.attr("id", i);
        // var timeId = taskInput.attr("id", i);
        // console.log(timeId);
        if (localStorage.getItem(taskInput.attr("id")) != "") {
            console.log("Found");
            console.log(localStorage.getItem(taskInput.attr("id")));
            // loads previously saved text
            // console.log(localStorage.getItem(timeId));
            taskInput.text(localStorage.getItem(taskInput.attr("id")));
        }
        else {
            console.log("Not Found");
            // Should create placeholder text if no ID has been found with a value
            taskInput.attr("placeholder", "Enter Text Here...");
        }
        var saveButton = $(`<button data-taskhour=${i}>`)

        // saveButton.click(saveTask)
        timeSlot.text(timeSlots[i]);
        timeSlot.append(taskInput, saveButton)
        containerDiv.append(timeSlot);
    }

    function saveTasks() {
        $("textarea").each(function () {
            var plans = $(this).val();
            console.log(plans);
            localStorage.setItem($(this).attr("id"), plans);
        })
    };

    $("button").click(function () {
        // console.log(this);
        saveTasks();
    })
    // ToDo: pull from local storage (hint: json parse/stringify)
}

startDay();