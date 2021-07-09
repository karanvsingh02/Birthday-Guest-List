var display_guest_array = [];
function submit()
  {    
    var guest_name = document.getElementById("Guest_name").value;
    console.log("Guest Name: " + guest_name);
    display_guest_array.push(guest_name);
    console.log(display_guest_array);

    var length_of_guest_name_array = display_guest_array.length;
    console.log("Length of the array: " + length_of_guest_name_array);
    document.getElementById("w_comma").innerHTML = display_guest_array;
}

function show()
   {
    var remove_commas = display_guest_array.join("<br>");
    console.log(remove_commas);
    document.getElementById("no_comma").innerHTML = remove_commas;
 
}

function ABC_sort()
   {
    var display_guest_array_sorted = display_guest_array.slice();
    display_guest_array_sorted.sort();
    var remove_commas = display_guest_array_sorted.join("<br>");
    document.getElementById("Abc").innerHTML = remove_commas;
}

function search()
  {
      var s = document.getElementById("Search_name").value;
      var found = 0
      var j;
      for ( j = 0; j < display_guest_array.length; j++)
        {
        
            if (s== display_guest_array[j]){
                found = found + 1;
            }
      }
      document.getElementById("Search_response").innerHTML = "Name found " + found + " time/s";
}