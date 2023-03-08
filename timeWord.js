/**Write a function turn a string to be a time words */

function wordify(num){
    const numList = {
      0:"",
      1:"one",
      2:"two",
      3:"three",
      4:"four",
      5:"five",
      6:"six",
      7:"seven",
      8:"eight",
      9:"nine",
      10:"ten",
      11:"eleven",
      12:"twelve",
      13:"thirteen",
      14:"fourteen",
      15:"fifteen",
      16:"sixteen",
      17:"seventeen",
      18:"eighteen",
      19:"nineteen",
      20:"twenty",
      30:"thirty",
      40:"fourty",
      50:"fifty"
    }
    return numList[num]
};
  
function timeWord ( timeStr )
{   
    if ( checkTwelves( timeStr ) ) return checkTwelves( timeStr );
    const [ hStr, mStr ] = timeStr.split( ":" );
    const [ hWord, meridiem ] = evalHour( hStr );
    const mWord = evalMinute( mStr );

    return `${hWord} ${mWord} ${meridiem}`
};

function checkTwelves ( str )
{
    if ( str === "00:00" ) return "midnight";
    if ( str === "12:00" ) return "noon";
}

function evalHour ( str )
{
    let h = parseInt( str );
    if ( h == 0 )
    {
        return [ "twelve", "am" ];
    } else if ( h < 12 )
    {
        return [ wordify( h ), "am" ];
    } else if ( h == 12 )
    {
        return [ wordify( h ), "pm" ];
    } else
    {
        return [ wordify( h - 12 ), "pm" ];
    }
};

function evalMinute ( str )
{
    let m = parseInt( str );

    if ( m === 0 )
    {
        return "o'clock";
    } else if ( m < 10 )
    {
        return `oh ${wordify(m)}`
    } else if ( m < 20 )
    {
        return wordify( m );
    } else
    {
        const ones = m % 10;
        const tens = m - ones;
        word = m % 10 === 0 ? wordify( tens ) : `${wordify( tens )} ${wordify( ones )}`;
        return word;
    }
};



module.exports = { timeWord, checkTwelves, evalHour, evalMinute };