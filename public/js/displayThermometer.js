var thermostat = new Thermostat();

      $(document).ready(function(){
        



        function updateThermometer() {
          $('#display').thermometer( 'setValue', thermostat.CurrentTemperature() );
          window.setTimeout( updateThermometer, 200 );
        }

        function RGB2HTML(red, green, blue)
      	{
          		var decColor = 0x1000000+blue + 0x100*green + 0x10000*red ;
          		return '#'+decColor.toString(16).substr(1);
      	}

        $('#display').thermometer( {
          height: 300,
          pathToSVG: 'svg/thermo-bottom.svg',
          valueChanged: function(val) {
            $('#valueDisplay').text(val.toFixed(1));
          },
          liquidColour: function( value ) {
          var red = ~~(value /32 * 255);
          var grn = ~~((32-value)/22 * 255);
      		return RGB2HTML(red,grn,0);
      		},
          onLoad: function() {
            updateThermometer();
          }
        } );

      });
