import java.util.HashMap;
import java.util.Map;

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

public class DuplicateEncoder {

  static String encode(String word){
    String output = "";
    String[] letters = word.split("");
    Map<String, Number> lookup = new HashMap<>();
    for(String letter:letters) {
      if(lookup.containsKey(letter.toLowerCase())) {
        lookup.put(letter.toLowerCase(), lookup.get(letter.toLowerCase()).intValue() + 1);
      }else {
        lookup.put(letter.toLowerCase(), 1);
      }
    }

    for(String letter:letters) {
      if(lookup.get(letter.toLowerCase()).intValue() == 1){
        output += "(";
      }else {
        output += ")";
      }
    }

    return output;
  }
  public static void main(String[] args) {
    System.out.println(")()())()(()()(" + " - " +  DuplicateEncoder.encode("Prespecialized"));
    System.out.println("))))())))" + " - " + DuplicateEncoder.encode("   ()(   "));
    System.out.println(DuplicateEncoder.encode("din") + " - " +  "(((");
    System.out.println( DuplicateEncoder.encode("recede") + " - " + "()()()");
  }
}
