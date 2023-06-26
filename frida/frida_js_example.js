

if (Java.available) {

    Java.perform(function () {

        try {

            var Activity = Java.use("owasp.sat.agoat.RootDetectionActivity");

            Activity.isRooted.implementation = function () {

                return false;

            }

        }

        catch (error) {

            console.log("[-] Error Detected");

            console.log((error.stack));

        }

    });

}

else {

    console.log(" ")

    console.log("[-] Java is Not available");

}
