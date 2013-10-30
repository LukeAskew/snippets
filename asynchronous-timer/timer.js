// Self-executing named function
(function asyncTimer() {

	// Do stuff here
	// ...

	// Call self, but use setTimeout delay
	setTimeout(asyncTimer, 20 * 1000);

}());