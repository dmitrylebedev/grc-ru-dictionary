/**
 * 
 * @param control
 * @param event
 * @returns {boolean}
 */
export const convertCharToggle = (control, event) => {
  
  let key = event.which;
  let typeLetter = true;
  
  if ( event.ctrlKey || event.metaKey ) {
    return;
  } else {
    if ( key === 38 ) { insertAtCursor(control, '`', event); } // & -> \
    if ( key === 33 ) { insertAtCursor(control, 'ͺ', event); } // ! -> |
    if ( key === 40 ) { insertAtCursor(control, '῾', event); }
    if ( key === 41 ) { insertAtCursor(control, '᾿', event); }
    if ( key === 43 ) { insertAtCursor(control, '¨', event); }
    if ( key === 47 ) { insertAtCursor(control, '´', event); }
    if ( key === 58 ) { insertAtCursor(control, '·', event); }
    if ( key === 59 ) { insertAtCursor(control, '·', event); }
    if ( key === 61 ) { insertAtCursor(control, '῀', event); }
    if ( key === 63 ) { insertAtCursor(control, ';', event); }
    if ( key === 64 ) { insertAtCursor(control, '̣', event); }
    if ( key === 65 ) { 
      insertAtCursor(control, 'Α', event);
    }
    if ( key === 66 ) { insertAtCursor(control, 'β', event); }
    if ( key === 67 ) { insertAtCursor(control, 'Ξ', event); }
    if ( key === 68 ) { insertAtCursor(control, 'Δ', event); }
    if ( key === 69 ) { insertAtCursor(control, 'Ε', event); }
    if ( key === 70 ) { insertAtCursor(control, 'Φ', event); }
    if ( key === 71 ) { insertAtCursor(control, 'Γ', event); }
    if ( key === 72 ) { insertAtCursor(control, 'Η', event); }
    if ( key === 73 ) { insertAtCursor(control, 'Ι', event); }
    if ( key === 74 ) { insertAtCursor(control, 'Σ', event); }
    if ( key === 75 ) { insertAtCursor(control, 'Κ', event); }
    if ( key === 76 ) { insertAtCursor(control, 'Λ', event); }
    if ( key === 77 ) { insertAtCursor(control, 'Μ', event); }
    if ( key === 78 ) { insertAtCursor(control, 'Ν', event); }
    if ( key === 79 ) { insertAtCursor(control, 'Ο', event); }
    if ( key === 80 ) { insertAtCursor(control, 'Π', event); }
    if ( key === 81 ) { insertAtCursor(control, 'Θ', event); }
    if ( key === 82 ) { insertAtCursor(control, 'Ρ', event); }
    if ( key === 83 ) { insertAtCursor(control, 'Σ', event); }
    if ( key === 84 ) { insertAtCursor(control, 'Τ', event); }
    if ( key === 85 ) { insertAtCursor(control, 'Υ', event); }
    if ( key === 86 ) { insertAtCursor(control, 'Ϝ', event); }
    if ( key === 87 ) { insertAtCursor(control, 'Ω', event); }
    if ( key === 88 ) { insertAtCursor(control, 'Χ', event); }
    if ( key === 89 ) { insertAtCursor(control, 'Ψ', event); }
    if ( key === 90 ) { insertAtCursor(control, 'Ζ', event); }
    if ( key === 92 ) { insertAtCursor(control, '`', event); }
    if ( key === 97 ) { insertAtCursor(control, 'α', event); }
    if ( key === 98 ) { insertAtCursor(control, 'β', event); }
    if ( key === 99 ) { insertAtCursor(control, 'ξ', event); }
    if ( key === 100 ) { insertAtCursor(control, 'δ', event); }
    if ( key === 101 ) { insertAtCursor(control, 'ε', event); }
    if ( key === 102 ) { insertAtCursor(control, 'φ', event); }
    if ( key === 103 ) { insertAtCursor(control, 'γ', event); }
    if ( key === 104 ) { insertAtCursor(control, 'η', event); }
    if ( key === 105 ) { insertAtCursor(control, 'ι', event); }
    if ( key === 106 ) { insertAtCursor(control, 'ς', event); }
    if ( key === 107 ) { insertAtCursor(control, 'κ', event); }
    if ( key === 108 ) { insertAtCursor(control, 'λ', event); }
    if ( key === 109 ) { insertAtCursor(control, 'μ', event); }
    if ( key === 110 ) { insertAtCursor(control, 'ν', event); }
    if ( key === 111 ) { insertAtCursor(control, 'ο', event); }
    if ( key === 112 ) { insertAtCursor(control, 'π', event); }
    if ( key === 113 ) { insertAtCursor(control, 'θ', event); }
    if ( key === 114 ) { insertAtCursor(control, 'ρ', event); }
    if ( key === 115 ) { insertAtCursor(control, 'σ', event); }
    if ( key === 116 ) { insertAtCursor(control, 'τ', event); }
    if ( key === 117 ) { insertAtCursor(control, 'υ', event); }
    if ( key === 118 ) { insertAtCursor(control, 'ϝ', event); }
    if ( key === 119 ) { insertAtCursor(control, 'ω', event); }
    if ( key === 120 ) { insertAtCursor(control, 'χ', event); }
    if ( key === 121 ) { insertAtCursor(control, 'ψ', event); }
    if ( key === 122 ) { insertAtCursor(control, 'ζ', event); }
    if ( key === 124 ) { insertAtCursor(control, 'ͺ', event); }
    // add ! for iota
    // add & for \
    return typeLetter;
  }
};


/* ********************************************************************************************
 * insertAtCursor (object)
 * ******************************************************************************************** */

function insertAtCursor(myField, myValue, event) {
  event.preventDefault()
  myField.value += myValue
}
