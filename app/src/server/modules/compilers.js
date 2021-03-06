/***
 *      /$$$$$$                                    /$$ /$$
 *     /$$__  $$                                  |__/| $$
 *    | $$  \__/  /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$| $$  /$$$$$$   /$$$$$$   /$$$$$$$
 *    | $$       /$$__  $$| $$_  $$_  $$ /$$__  $$| $$| $$ /$$__  $$ /$$__  $$ /$$_____/
 *    | $$      | $$  \ $$| $$ \ $$ \ $$| $$  \ $$| $$| $$| $$$$$$$$| $$  \__/|  $$$$$$
 *    | $$    $$| $$  | $$| $$ | $$ | $$| $$  | $$| $$| $$| $$_____/| $$       \____  $$
 *    |  $$$$$$/|  $$$$$$/| $$ | $$ | $$| $$$$$$$/| $$| $$|  $$$$$$$| $$       /$$$$$$$/
 *     \______/  \______/ |__/ |__/ |__/| $$____/ |__/|__/ \_______/|__/      |_______/
 *                                      | $$
 *                                      | $$
 *                                      |__/
 */
/**
 * [0][compiler/interpretor]
 * [1][file name]
 * [2][command to invoke the compiled program]
 * [3][language name]
 * [4][additional arguments/flags for compilers]
 */
const compilers = [
  ["python","file.py","","Python",""],
  ["\'gcc -o /usercode/a.out\'","file.c","/usercode/a.out","C",""],
  ["assembler","file.asm","/usercode/file","Assembly","/usercode/file"]
];

export { compilers };
