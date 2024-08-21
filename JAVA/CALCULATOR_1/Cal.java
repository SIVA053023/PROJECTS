import java.util.Scanner;

class CAl{
    public static void main(String[] args) {
        int  Operator,n1,n2;
        System.out.println("1-Add \n 2-Subtract \n 3-multiply \n 4-Division");
        System.out.println("Choose your operator: ");
        Scanner sc=new Scanner(System.in);
        Operator=sc.nextInt();
        System.out.println("Enter your first number :");
         n1= sc.nextInt();
        System.out.println("Enter your first number :");
        n2=sc.nextInt();
          
        double result=0;
        switch (Operator) {
            case 1:
                result=n1+n2; 
                break;
            case 2:
                result=n1-n2; 
                break;
            case 3:
                result=n1*n2; 
                break;
            case 4:
                result=n1/n2; 
                break; 
            default:
            System.out.println("Choose the correct operation");
                break;
        }
        System.out.println("Your result ="+result);
        sc.close();
    }
}