import java.util.*;
import java.math.*;
import java.text.*;

class Playground {

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();

        if (n % 2 != 0) {
            System.out.println("Wierd");
        } else if (n % 2 == 0) {
            if (1 <= n && 5 >= n) {
                System.out.println("Not wierd");
            } else if (6 <= n && 20 >= n) {
                System.out.println("Wierd");
            } else {
                System.out.println("Not Wierd");
            }

        }

        scanner.close();

    }

}