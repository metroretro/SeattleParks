$(document).ready(function() {  

	$('.order').click(function(e){
        e.preventDefault(); //stop default action of the link
		order = $(this).attr("href");  //get category from URL
		loadAJAX(order);  //load AJAX and parse JSON file
	});
});	


function loadAJAX(order)
{
	$.ajax({  
		type: "GET",
		dataType: "json",  
		url: "api.php?order=" + order,
		success: parksJSON,
		//success: toConsole,
	});

	$('#seattleParks').html('');//clear data
}

//function toConsole(data)
//{//return data to console for JSON examination
//	console.log(data); //to view,use Chrome console, ctrl + shift + j
//}

function parksJSON(data){
	//$('#output').text(JSON.stringify(data));  //uncomment to view raw output
	var header = data.title;
	$('#resultsTitle').html(header);
	$.each(data.parks, function(i,item){
	
		var text = '<div class="picWrap"><img class="picItem" src="images/historic/' + item.Image + '" /></div>';
		//var text = '<b>Name</b>: ' + item.Name + '<br />';
		text += '<div class="parkDesc"><h3>' + item.Name + '</h3>';
		text += '<p>' + item.Address + '</p>';
		text += '<p>' + item.Neighborhood + ' neighborhood</p>';
		text += '<p>' + item.Acreage + ' acres</p>';
		text += '<p><span>Year Established</span>: ' + item.YearEst + '</p>';
		text += '<h4>Description</h4>'
		text += '<p>' + item.ParkDescription + '<a href="' + item.Website + '"> Read more...</a> </p>';
		text += '<p class="imgCredit">Image Credit: ' + item.HstImgCredit + '</p> </div>';
		//text += '<div id="pic"><img src="images/historic/' + item.HistoricImage + '" /></div>';
		
		//append text to #parks div
		$('<div class="parkItem"></div>').html(text).appendTo('#seattleParks');  
		
	});
	
	var images = $('div.pic image');
	console.log(images);

//$('img.pic').click(function(){
	//alert("success!");
	//console.log
	//var source = $('img').attr("src");
	//console.log(source);
	//source = source.replace("/historic", "");
	//console.log(source);
	//$('img').attr("src", source); 
//});
	
}