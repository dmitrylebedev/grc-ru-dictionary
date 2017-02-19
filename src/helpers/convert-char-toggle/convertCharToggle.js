/**
 * Convert cyrillic literals to ancient greek
 * 
 * @param event
 */

export const convertCharToggle = (event) => {
  
  let key = event.which;
  let control = event.currentTarget;
  
  if ( key > 38 && key < 124 ) { 
    event.preventDefault(); 
  }
  
  if ( event.ctrlKey || event.metaKey ) { 
    return; 
  }
  
  if ( key === 38 )  { insertAtCursor(control, '`'); }
  if ( key === 33 )  { insertAtCursor(control, 'ͺ'); }
  if ( key === 40 )  { insertAtCursor(control, '῾'); }
  if ( key === 41 )  { insertAtCursor(control, '᾿'); }
  if ( key === 43 )  { insertAtCursor(control, '¨'); }
  if ( key === 47 )  { insertAtCursor(control, '´'); }
  if ( key === 58 )  { insertAtCursor(control, '·'); }
  if ( key === 59 )  { insertAtCursor(control, '·'); }
  if ( key === 61 )  { insertAtCursor(control, '῀'); }
  if ( key === 63 )  { insertAtCursor(control, ';'); }
  if ( key === 64 )  { insertAtCursor(control, '̣');  }
  if ( key === 65 )  { insertAtCursor(control, 'Α'); }
  if ( key === 66 )  { insertAtCursor(control, 'β'); }
  if ( key === 67 )  { insertAtCursor(control, 'Ξ'); }
  if ( key === 68 )  { insertAtCursor(control, 'Δ'); }
  if ( key === 69 )  { insertAtCursor(control, 'Ε'); }
  if ( key === 70 )  { insertAtCursor(control, 'Φ'); }
  if ( key === 71 )  { insertAtCursor(control, 'Γ'); }
  if ( key === 72 )  { insertAtCursor(control, 'Η'); }
  if ( key === 73 )  { insertAtCursor(control, 'Ι'); }
  if ( key === 74 )  { insertAtCursor(control, 'Σ'); }
  if ( key === 75 )  { insertAtCursor(control, 'Κ'); }
  if ( key === 76 )  { insertAtCursor(control, 'Λ'); }
  if ( key === 77 )  { insertAtCursor(control, 'Μ'); }
  if ( key === 78 )  { insertAtCursor(control, 'Ν'); }
  if ( key === 79 )  { insertAtCursor(control, 'Ο'); }
  if ( key === 80 )  { insertAtCursor(control, 'Π'); }
  if ( key === 81 )  { insertAtCursor(control, 'Θ'); }
  if ( key === 82 )  { insertAtCursor(control, 'Ρ'); }
  if ( key === 83 )  { insertAtCursor(control, 'Σ'); }
  if ( key === 84 )  { insertAtCursor(control, 'Τ'); }
  if ( key === 85 )  { insertAtCursor(control, 'Υ'); }
  if ( key === 86 )  { insertAtCursor(control, 'Ϝ'); }
  if ( key === 87 )  { insertAtCursor(control, 'Ω'); }
  if ( key === 88 )  { insertAtCursor(control, 'Χ'); }
  if ( key === 89 )  { insertAtCursor(control, 'Ψ'); }
  if ( key === 90 )  { insertAtCursor(control, 'Ζ'); }
  if ( key === 92 )  { insertAtCursor(control, '`'); }
  if ( key === 97 )  { insertAtCursor(control, 'α'); }
  if ( key === 98 )  { insertAtCursor(control, 'β'); }
  if ( key === 99 )  { insertAtCursor(control, 'ξ'); }
  if ( key === 100 ) { insertAtCursor(control, 'δ'); }
  if ( key === 101 ) { insertAtCursor(control, 'ε'); }
  if ( key === 102 ) { insertAtCursor(control, 'φ'); }
  if ( key === 103 ) { insertAtCursor(control, 'γ'); }
  if ( key === 104 ) { insertAtCursor(control, 'η'); }
  if ( key === 105 ) { insertAtCursor(control, 'ι'); }
  if ( key === 106 ) { insertAtCursor(control, 'ς'); }
  if ( key === 107 ) { insertAtCursor(control, 'κ'); }
  if ( key === 108 ) { insertAtCursor(control, 'λ'); }
  if ( key === 109 ) { insertAtCursor(control, 'μ'); }
  if ( key === 110 ) { insertAtCursor(control, 'ν'); }
  if ( key === 111 ) { insertAtCursor(control, 'ο'); }
  if ( key === 112 ) { insertAtCursor(control, 'π'); }
  if ( key === 113 ) { insertAtCursor(control, 'θ'); }
  if ( key === 114 ) { insertAtCursor(control, 'ρ'); }
  if ( key === 115 ) { insertAtCursor(control, 'σ'); }
  if ( key === 116 ) { insertAtCursor(control, 'τ'); }
  if ( key === 117 ) { insertAtCursor(control, 'υ'); }
  if ( key === 118 ) { insertAtCursor(control, 'ϝ'); }
  if ( key === 119 ) { insertAtCursor(control, 'ω'); }
  if ( key === 120 ) { insertAtCursor(control, 'χ'); }
  if ( key === 121 ) { insertAtCursor(control, 'ψ'); }
  if ( key === 122 ) { insertAtCursor(control, 'ζ'); }
  if ( key === 124 ) { insertAtCursor(control, 'ͺ'); }
};


/**
 * @param {HTMLElement} myField
 * @param {string} myValue
 */
function insertAtCursor(myField, myValue) {
  myField.value += myValue
}
