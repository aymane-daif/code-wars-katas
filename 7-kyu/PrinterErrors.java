// https://www.codewars.com/kata/56541980fa08ab47a0000040
public class PrinterErrors {
    
    public static String printerError(String s) {
      String[] letters = s.split("");
      int errors = 0;
        for(String letter: letters) {
          if(letter.compareTo("m") > 0) {
            errors++;
          }
        }
        return errors + "/" + s.length();
    }
    public static void main(String[] args) {
        String s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
        System.out.println("3/56");
        System.out.println(PrinterErrors.printerError(s));
    }
}

