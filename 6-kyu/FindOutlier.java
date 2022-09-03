// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

public class FindOutlier {
  static int find(int[] integers){
    int numberOfEvenNumbers = 0;
    int numberOfOddNumbers = 0;
    int outlier = 0;
    boolean isEven=false;
    for(int number:integers) {
      if(number % 2 == 0) numberOfEvenNumbers++;
      else numberOfOddNumbers++;
    }
    if(numberOfEvenNumbers > numberOfOddNumbers) {
      isEven = true;
    }
    for(int i = 0; i < integers.length; i++) {
      int number = integers[i];
      if(isEven) {
        if(number % 2 != 0) {
          outlier = number;
          break;
        }
      }else {
        if(number %2 == 0){
          outlier = number;
          break;
        };
      }
    }
    return outlier;
  }
  public static void main(String[] args) {
    int[] exampleTest1 = {2,6,8,-10,3}; 
    int[] exampleTest2 = {206847684,1056521,7,17,1901,21104421,7,1,35521,1,7781}; 
    int[] exampleTest3 = {Integer.MAX_VALUE, 0, 1};
    System.out.println(3 + " " + FindOutlier.find(exampleTest1));
    System.out.println(206847684 + " " + FindOutlier.find(exampleTest2));
    System.out.println(0 + " " + FindOutlier.find(exampleTest3));
  }
}
