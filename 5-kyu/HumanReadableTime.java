// https://www.codewars.com/kata/52685f7382004e774f0001f7
public class HumanReadableTime {
  public static String makeReadable(int seconds) {
    int numberOfSeconds = 0;
    int numberOfMinutes = 0;
    int numberOfHours = 0;
    numberOfHours= seconds / 3600;
    numberOfMinutes = (seconds - (numberOfHours * 3600)) / 60;
    numberOfSeconds = ((seconds - (numberOfMinutes * 60) - (numberOfHours * 3600)));
    String formattedNumberOfHours = numberOfHours < 10 ? "0" + numberOfHours : numberOfHours + "";
    String formattedNumberOfMinutes = numberOfMinutes < 10 ? "0" + numberOfMinutes : numberOfMinutes + "";
    String formattedNumberOfSeconds = numberOfSeconds < 10 ? "0" + numberOfSeconds  : numberOfSeconds + "";
    return formattedNumberOfHours + ":" + formattedNumberOfMinutes + ":" + formattedNumberOfSeconds;
  }
  public static void main(String[] args) {
    System.out.println( "00:00:00" + " " + HumanReadableTime.makeReadable(0));
    System.out.println( "00:00:05" + " " + HumanReadableTime.makeReadable(5));
    System.out.println( "00:01:00" + " " + HumanReadableTime.makeReadable(60));
    System.out.println( "23:59:59" + " " + HumanReadableTime.makeReadable(86399));
    System.out.println( "99:59:59" + " " + HumanReadableTime.makeReadable(359999));
  }
}

