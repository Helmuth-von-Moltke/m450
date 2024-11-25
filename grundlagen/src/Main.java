public class Main {

    public static void main(String[] args) {
        System.out.println(new Main().test_calculate_price());
    }

    boolean test_calculate_price() {

        double price;
        boolean test_ok = true;

        price = new PriceCalculation().calculatePrice(1000, 300, 2, 5);
        System.out.println("expected: 1235.0, got: " + price);
        if (Math.abs(price - 1235.0) < 1e-2) {
            test_ok = test_ok && true;
        } else {
            test_ok = false;
        }

        price = new PriceCalculation().calculatePrice(1000, 500, 3, 5);
        System.out.println("expected: 1400.0, got: " + price);
        if (Math.abs(price - 1400.0) < 1e-2) {
            test_ok = test_ok && true;
        } else {
            test_ok = false;
        }

        price = new PriceCalculation().calculatePrice(1000, 500, 5, 5);
        System.out.println("expected: 1375.0, got: " + price);
        if (Math.abs(price - 1375.0) < 1e-2) {
            test_ok = test_ok && true;
        } else {
            test_ok = false;
        }

        price = new PriceCalculation().calculatePrice(2000, 400, 4, 8);
        System.out.println("expected: 2200.0, got: " + price);
        if (Math.abs(price - 2200.0) < 1e-2) {
            test_ok = test_ok && true;
        } else {
            test_ok = false;
        }

        return test_ok;
    }
}