<?php
 /**
 * api.php is a sample API file to be called via AJAX to 
 * deliver the contents of 2 JSON files, one of which orders the 
 * Seattle parks data by name, the other by park acreage.
 *
 * The page can be called via AJAX either via GET or POST, using a variable 
 * named "order":
 *
 * <code>
 * api.php?order=name
 * </code>
 *
 * In the example above, the parameter order is loaded with the string "name" 
 * which will indicate to the API to load the JSON file containing 
 * the parks data ordered by park name.
 *
 * @package parks-in-seattle-web-service
 * @author Emily Ruf
 * @version 1.00 2015/02/21
 * @link https://github.com/newmanix/bond-web-service 
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @see index.htm
 * @todo none
 */

if(isset($_REQUEST['cat']))
{//check to be sure data has been transmitted via GET or POST
	switch($_REQUEST['cat'])
	{//determine contents of 'cat'
		case "box":
			include('data/bond-box-office.js'); //"box" orders by box office results
			break;
		default:
			include('data/bond-year.js'); //default orders by year
	}
}else{//if not data sent, inform calling application
	echo "Incorrect parameter sent";
}
