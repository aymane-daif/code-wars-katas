import java.util.ArrayList;
import java.util.List;

// https://www.codewars.com/kata/52774a314c2333f0a7000688

public class ValidParentheses {
  public static boolean validParentheses(String parens) {
    String onlyParens = parens.replaceAll("[^()]", "");
    if(onlyParens.startsWith(")")) return false;
    if(onlyParens.endsWith("(")) return false;
    if((onlyParens.length() % 2) != 0) return false;
    String[] parensArr = onlyParens.split("");
    List<String> leftParens = new ArrayList<>();
    List<String> rightParens = new ArrayList<>();
    for (String paren : parensArr) {
      if(paren.equals("(")) {
        leftParens.add("(");
      }else if(paren.equals(")")) {
        if(leftParens.size() == 0) return false;
        rightParens.add(")");
        leftParens.remove(leftParens.size() - 1);
      }
    }
    if(leftParens.size() > 0) return false;
    return true;
  }
  public static void main(String[] args) {
    System.out.println(true + " " + ValidParentheses.validParentheses( "()" ));  
    System.out.println(false + " " + ValidParentheses.validParentheses( "())" ));
    System.out.println(true + " " + ValidParentheses.validParentheses( "32423(sgsdg)" ));  
    System.out.println(false + " " + ValidParentheses.validParentheses( "(dsgdsg))2432" ));
    System.out.println(true + " " + ValidParentheses.validParentheses( "adasdasfa" ));
    System.out.println(false + " " + ValidParentheses.validParentheses( ")(()))" ));
    System.out.println(false + " " + ValidParentheses.validParentheses( "(()))(" ));
    System.out.println(false + " " + ValidParentheses.validParentheses( "(())))" ));
    System.out.println(false + " " + ValidParentheses.validParentheses( "(" ));
    System.out.println(true + " " + ValidParentheses.validParentheses( "(())((()())())" ));
    System.out.println(false + " " + ValidParentheses.validParentheses( "()((()" ));
  }
}
