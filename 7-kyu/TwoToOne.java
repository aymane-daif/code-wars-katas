// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

public class TwoToOne {
  private final static String letters = "abcdefghijklmnopqrstuvwxyz";
 
  public static String longest (String s1, String s2) {  
    String output = "";
    String[] lettersArray = letters.split("");
    for(String letter:lettersArray) {
      if(s1.contains(letter) || s2.contains(letter)){
        output+= letter;
      }
    }
     return output;
  }


  public static void main(String[] args) {
    System.out.println("aehrsty" + " " + TwoToOne.longest("aretheyhere", "yestheyarehere"));
    System.out.println("abcdefghilnoprstu" + " " + TwoToOne.longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
    System.out.println("acefghilmnoprstuy" + " " + TwoToOne.longest("inmanylanguages", "theresapairoffunctions"));
  }
}