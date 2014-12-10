var s = ""

function srch(s)
{

  var value = escape( s ); 
  var url   = "";
  
  if ( value.length < 1 )
    value = "http://www.pangaea.de/";
	
  if ( parseInt( value ) == value )
    value = "doi:10.1594/PANGAEA." + value;

  while ( value.indexOf( "%09" ) > -1 )  // tab
    value = value.replace( "%09", "" );

  while ( value.lastIndexOf( "%20" ) == value.length-3  )  // blank at end
	value = value.slice( 0, value.length-3 );

  while ( value.indexOf( "%20" ) > -1 )  // blank
    value = value.replace( "%20", "+" );

  while ( value.indexOf( "%3A" ) > -1 )  // :
    value = value.replace( "%3A", ":" );

  while ( value.indexOf( "%2F" ) > -1 )  // /
    value = value.replace( "%2F", "/" );

  value = value.toLowerCase();

  if ( value.substr( 0, 7 ) == "doi:10." )
  {
      if ( value.substr( 0, 20 ) == "doi:10.1594/pangaea." )
        url = "http://doi.pangaea.de/" + value.substr( 4 );
      else
        url = "http://dx.doi.org/" + value.substr( 4 );
  }
  
  if ( value.substr( 0, 4 ) == "hdl:" )
    url = "http://hdl.handle.net/" + value.substr( 4 );

  if ( value.substr( 0, 5 ) == "sref:" )
    url = "http://direct.sref.org/" + value.substr( 5 );

  if ( value.substr( 0, 7 ) == "urn:nbn" )
    url = "http://nbn-resolving.de/" + value;

  if ( value.substr( 0, 7 ) == "http://" )
    url = value;

  if ( ( value == "l" ) || ( value == "latest" ) )
    url = "http://www.pangaea.de/tools/latest-datasets.rss";

  if ( value.substr( 0, 2 ) == "l+" ) 
    url = "http://www.pangaea.de/tools/latest-datasets.rss?q=" + value.substr( 2 );
	
  if ( value.substr( 0, 7 ) == "latest+" )
    url = "http://www.pangaea.de/tools/latest-datasets.rss?q=" + value.substr( 7 );

  if ( url.substr( 0, 7 ) != "http://" )
    url = "http://www.pangaea.de/search?q=" + value;

  if (widget)
	widget.openURL(url);
}

function logoClick() 
{ 
  url = "http://wiki.pangaea.de/wiki/PanDOI";
  if (widget)
	widget.openURL(url);
}

function headerClick() 
{ 
  url = "http://wiki.pangaea.de/wiki/PanDOI";
  if (widget)
	widget.openURL(url);
}
