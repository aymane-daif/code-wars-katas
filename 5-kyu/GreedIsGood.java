import java.util.HashMap;
import java.util.Map;

// https://www.codewars.com/kata/5270d0d18625160ada0000e4
public class GreedIsGood {

  public static int greedy(int[] dice){
    Map<Integer, Integer> diceCounter = new HashMap<>();
    int sum = 0;

    for (int num : dice) {
      if(diceCounter.containsKey(num)) {
        diceCounter.put(num, diceCounter.get(num).intValue() + 1);
      }else {
        diceCounter.put(num, 1);
      }
    }

    for (Map.Entry<Integer, Integer> entry : diceCounter.entrySet()) {
      if(entry.getKey().intValue() == 1) {
        if(entry.getValue() == 3) sum += 1000;
        else if(entry.getValue() > 3) sum += 1000 + 100 * (entry.getValue() - 3);
        else sum += 100 * entry.getValue();
      }else if(entry.getKey().intValue() == 5) {
        if(entry.getValue() == 3) sum += 500;
        else if(entry.getValue() > 3) sum += 500 + 50 * (entry.getValue() - 3);
        else sum += 50 * entry.getValue();
      }else if(entry.getKey().intValue() == 6 && entry.getValue() >= 3) {
        sum += 600;
      } else if(entry.getKey().intValue() == 4 && entry.getValue() >= 3) {
        sum += 400;
      } else if(entry.getKey().intValue() == 3 && entry.getValue() >= 3) {
        sum += 300;
      } else if(entry.getKey().intValue() == 2 && entry.getValue() >= 3) {
        sum += 200;
      }
    }
    return sum;
  }
  public static void main(String[] args) {
    System.out.println( 250 + " " + GreedIsGood.greedy(new int[]{5,1,3,4,1}));
    System.out.println( 1100 + " " + GreedIsGood.greedy(new int[]{1,1,1,3,1}));
    System.out.println( 450 + " " + GreedIsGood.greedy(new int[]{2,4,4,5,4}));
  }
}
