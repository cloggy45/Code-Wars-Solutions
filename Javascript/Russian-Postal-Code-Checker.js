// http://www.codewars.com/kata/552e45cc30b0dbd01100001a/train/javascript

function zipvalidate(postcode){
    return /^([^05789])(\d{5})$/.test(postcode);
}

