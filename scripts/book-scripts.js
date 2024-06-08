let service = "";
let doctor = "";
let date = "";
let time = "";


$(document).ready(function () {
    $('#dateSelect').datepicker({
        format: 'mm/dd/yyyy',
        startDate: '0d',
        autoclose: true
    });

    $('#timeSelect').mdtimepicker({
        format: 'hh:mm tt',
        theme: 'blue',
        hourPadding: true
    });

    $('.add-animal-btn').click(function () {
        event.preventDefault();

        const formGroup = `
        <div class="form-group row">
            <label class="col-md-3 col-form-label text-start">Animal Name</label>
            <div class="col-md-3">
                <div class="input-group date">
                    <input type="text" class="form-control">
                </div>
            </div>

            <label class="col-md-1 col-form-label text-start">Breed</label>
            <div class="col-md-3">
                <div class="input-group date">
                    <input type="text" class="form-control">
                </div>
            </div>
        </div>
        `;

        $('#animals-subform').append(formGroup);
    });

    $('.del-animal-btn').click(function () {
        event.preventDefault();

        const animalGroups = $('#animals-subform .form-group');
        if (animalGroups.length === 1) {
            alert("You must register at least 1 animal!");
        } else {
            animalGroups.last().remove();
            if (animalGroups.length === 2) {
                $('.remove-button').hide();
            }
        }
    });

    $('#continue-1').click(function () {
        let tempService = $('#serviceSelect').val();
        let tempDoctor = $('#doctorSelect').val();
        let tempDate = $('#dateSelect').val();
        let tempTime = $('#timeSelect').val();

        if (tempService && tempDoctor && tempDate && tempTime) {
            $('#step-1').toggle();
            $('#step-2').toggle();

            service = tempService;
            doctor = tempDoctor;
            date = tempDate;
            time = tempTime;
        } else {
            alert('Please fill out all fields to continue :)');
        }
    });

    $('#back-2').click(function () {
        $('#step-1').toggle();
        $('#step-2').toggle();
    });

    $('#continue-2').click(function () {
        let humanNameField = $('#humanNameField').val();
        let emailField = $('#emailField').val();
        let animalName1 = $('#animalName1').val();
        let animalBreed1 = $('#animalBreed1').val();

        if (humanNameField && emailField && animalName1 && animalBreed1) {
            $('#step-2').toggle();
            $('#step-3').toggle();

            let newDiv = $("<div>").html("Thank you for booking an appointment with " +
                "us, <strong>" + humanNameField + "</strong>, we have received your " +
                "booking for <strong>" + service + "</strong> with <strong>" + doctor +
                "</strong>.");

            $("#output").append(newDiv);
        } else {
            alert('Please fill out the required fields to continue :)');
        }
    });
});