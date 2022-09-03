import java.text.DecimalFormat;

// https://www.codewars.com/kata/555eded1ad94b00403000071
public class NthSeries {
  public static String seriesSum(int n) {
    if(n==0) return "0.00";
    double sum = 0;
    int counter = 1;
    double denominator = 1.0;
    while(counter <= n){
      sum += 1/denominator;
      denominator += 3.0;
      counter++;
    }
    DecimalFormat df = new DecimalFormat("0.00");
    return df.format(sum) + "";
	}
  public static void main(String[] args) {
    System.out.println("1.57" + " " + NthSeries.seriesSum(5));
    System.out.println("1.77" + " " + NthSeries.seriesSum(9));
		System.out.println("1.94" + " " + NthSeries.seriesSum(15));
  }
}
