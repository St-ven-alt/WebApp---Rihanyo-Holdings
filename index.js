function calculateTotal() {

    // =========================
    // GET FORM VALUES
    // =========================

    const customerName =
        document.getElementById("customerName").value.trim();

    const phoneNumber =
        document.getElementById("phoneNumber").value.trim();

    const deliveryLocation =
        document.getElementById("deliveryLocation").value.trim();

    const bookingDate =
        document.getElementById("bookingDate").value;

    const bookingTime =
        document.getElementById("bookingTime").value;

    const hireDuration =
        document.getElementById("hireDuration").value;

    const color =
        document.getElementById("tentColor").value;

    const tents =
        parseInt(
            document.getElementById("tentQuantity").value
        ) || 0;

    const chairs =
        parseInt(
            document.getElementById("chairQuantity").value
        ) || 0;

    const deliveryPerson =
        document.getElementById("deliveryPerson").value;


    // =========================
    // VALIDATION
    // =========================

    if (customerName === "") {

        alert("Please enter your name.");

        return;
    }


    if (phoneNumber === "") {

        alert("Please enter your phone number.");

        return;
    }


    if (deliveryLocation === "") {

        alert("Please enter the delivery location.");

        return;
    }


    if (bookingDate === "") {

        alert("Please select the date.");

        return;
    }


    if (bookingTime === "") {

        alert("Please select the time.");

        return;
    }


    if (hireDuration === "") {

        alert("Please select how long you need the equipment.");

        return;
    }


    if (color === "") {

        alert("Please select a tent colour.");

        return;
    }


    if (tents === 0 && chairs === 0) {

        alert("Please enter at least one tent or one chair.");

        return;
    }


    if (deliveryPerson === "") {

        alert("Please select who should deliver.");

        return;
    }


    // =========================
    // PRICES
    // =========================

    const tentPrice = 50;

    const chairPrice = 2;


    // =========================
    // CALCULATE TOTAL
    // =========================

    const days = Number(hireDuration);

    const tentCost =
        tents * tentPrice * days;

    const chairCost =
        chairs * chairPrice * days;

    const total =
        tentCost + chairCost;


    // =========================
    // DISPLAY CUSTOMER DETAILS
    // =========================

    document.getElementById("bookingCustomer").textContent =
        customerName;

    document.getElementById("bookingPhone").textContent =
        phoneNumber;

    document.getElementById("bookingLocation").textContent =
        deliveryLocation;


    // =========================
    // DISPLAY BOOKING DETAILS
    // =========================

    document.getElementById("bookingDateDisplay").textContent =
        bookingDate;

    document.getElementById("bookingTimeDisplay").textContent =
        bookingTime;


    document.getElementById("bookingDuration").textContent =
        days + (days === 1 ? " Day" : " Days");


    document.getElementById("bookingDelivery").textContent =
        deliveryPerson;


    // =========================
    // DISPLAY EQUIPMENT
    // =========================

    document.getElementById("displayColor").textContent =
        color;


    document.getElementById("displayTents").textContent =
        tents + (tents === 1 ? " tent" : " tents");


    document.getElementById("displayChairs").textContent =
        chairs + (chairs === 1 ? " chair" : " chairs");


    // =========================
    // DISPLAY PRICES
    // =========================

    document.getElementById("tentCost").textContent =
        "R" + tentCost.toFixed(2);


    document.getElementById("chairCost").textContent =
        "R" + chairCost.toFixed(2);


    document.getElementById("totalCost").textContent =
        "R" + total.toFixed(2);


    // =========================
    // SHOW BOOKING SUMMARY
    // =========================

    document.getElementById("priceBox").style.display =
        "block";


    // Scroll to the booking summary
    document.getElementById("priceBox").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// =========================
// CONFIRM BOOKING
// =========================

function confirmBooking() {

    const customerName =
        document.getElementById("customerName").value;

    const phoneNumber =
        document.getElementById("phoneNumber").value;

    const location =
        document.getElementById("deliveryLocation").value;

    const date =
        document.getElementById("bookingDate").value;

    const time =
        document.getElementById("bookingTime").value;

    const duration =
        document.getElementById("hireDuration").value;

    const color =
        document.getElementById("tentColor").value;

    const tents =
        document.getElementById("tentQuantity").value;

    const chairs =
        document.getElementById("chairQuantity").value;

    const delivery =
        document.getElementById("deliveryPerson").value;

    const total =
        document.getElementById("totalCost").textContent;


    alert(
        "Booking Confirmed!\n\n" +

        "Customer: " + customerName + "\n" +

        "Phone: " + phoneNumber + "\n" +

        "Location: " + location + "\n" +

        "Date: " + date + "\n" +

        "Time: " + time + "\n" +

        "Duration: " + duration + " day(s)\n" +

        "Tent Colour: " + color + "\n" +

        "Tents: " + tents + "\n" +

        "Chairs: " + chairs + "\n" +

        "Deliverer: " + delivery + "\n\n" +

        "TOTAL: " + total
    );
}
