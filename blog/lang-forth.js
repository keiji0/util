PR.registerLangHandler(
  PR.createSimpleLexer(
    [
      [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
      [PR.PR_STRING, /^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])*(?:\'|$))/, null, '"\'']
    ],
    [
      [PR.PR_COMMENT, /^(?:\/\/[^\r\n]*|\([\s\S]*?\))/],
      [PR.PR_STRING,  /^(\[(=*)\[[\s\S]*?(?:\]\1\]|$))|(:\s+\S+)/],
      [PR.PR_KEYWORD, /^(?:def|immediate|if|unless|else|then|postpone|begin|until|defer|defer!|case|endcase|of|of|endof|default|return|do|while|repeat|again|loop|\+loop|val|const|variable|var)\b/, null],
      [PR.PR_LITERAL, /^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
      [PR.PR_PLAIN, /^[a-z_]\w*/i],
      [PR.PR_PUNCTUATION, /^[^\w\t\n\r \xA0][^\w\t\n\r \xA0\"\'\-\+=]*/],
    ]),
  ['forth']);
