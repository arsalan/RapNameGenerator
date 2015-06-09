

/** 
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

function Generator() {

    /* Name Arrays: Customize names to change possible output */
    this.last_names = ['The Dill', 'the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist'];
    this.first_names = ['Fella', 'Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];

    this.generate = function() {
    	var firstName = this.first_names[generateRandomindex(this.first_names)];
    	var lastName = this.last_names[generateRandomindex(this.last_names)];

    	return firstName + " " + lastName;
    }
}
	
function generateRandomindex(array) {
	return Math.floor(Math.random() * array.length);
}

$(document).ready(function() {

    var engine = new Generator;
    
    $("#enter").click(function() {
    	var name = $("#user-input").val().trim();
    	if (name.length == 0) {
    		showDanger(".alert-success", ".alert-danger");
    		return;
    	}
    	var rapName = engine.generate();
    	$(".alert-success").text(generateMessage(name, rapName));
    	showSuccess(".alert-success", ".alert-danger");

    });

    function showSuccess(successSelector, dangerSelector) {
    	$(dangerSelector).css('display', 'none');
    	$(successSelector).css('display', 'block');
    }

    function showDanger(successSelector, dangerSelector) {
    	$(dangerSelector).css('display', 'block');
    	$(successSelector).css('display', 'none');
    }

    function generateMessage(name, rapName) {
    	var escaped = escape(name).split("%20").join(" ");
    	return escaped + ", your rap name is " + rapName + "!";
    }

});
