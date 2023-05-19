//Manual Number Sort || Add { a } for Ascending || { d } for Descending 
const sortInOrder = ( ascendDescend, array ) => {
    let length = 0;
  //Manual array length calculation.
    while( array[ length ] !== undefined ){
      length++
    }
    for( let i = 0; i < length - 1; i++ ){
      let swapped = false;
      for( let j = 0; j < length - 1; j++ ){
        if( ( ascendDescend === 'a' && ( array[ j ] - array[ j + 1 ] ) > 0 ) || 
            ( ascendDescend === 'd' && ( array[ j ] - array[ j + 1 ] ) < 0 ) ){
              array[ j ] = array[ j ] + array[ j + 1 ];
              array[ j + 1 ] = array[ j ] - array[ j + 1 ];
              array[ j ] = array[ j ] - array[ j + 1 ];
              swapped = true;
        }
      }
      if( !swapped ) break;
    }
    return array;
  }

export default sortInOrder;