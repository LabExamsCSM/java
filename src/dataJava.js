export const DataJava = [
    {
        unit: 1,
        title: `Design a Java class Circle`,
        code: `
        class Circle {
            private double radius;
        
            // default constructor
            Circle() {
                radius = 0.0;
            }
        
            // parameterized constructor
            Circle(double radius) {
                this.radius = radius;
            }
        
            // setters
            void radius_setter(double radius) {
                this.radius = radius;
            }
        
            // getters
            double radius_getter() {
                return radius;
            }
        
            // area method
            void area() {
        
                System.out.println("The area of circle is : " + 3.14 * radius * radius);
            }
        
            // circumference
            void circumference() {
                System.out.println("The circumference of circle is : " + 2 * 3.14 * radius);
            }
        
        }
        
        class Testing {
            public static void main(String args[]) {
        
                // instantiating with default constructor
                Circle c1 = new Circle();
                // instantiating with parameterized constructor
                Circle c2 = new Circle(2.0);
        
                // setting radius of circle c1 by radius_setter() function
                c1.radius_setter(1.0);
        
                // accessing radius (private) of circle c2 by radius_getter() function
                System.out.println("The radius of circle c2 is : " + c2.radius_getter());
        
                // calling area function for circle c1
                c1.area();
        
                // calling circumference function for circle c2
                c2.circumference();
        
            }
        }        
        `,
    },
    {
        unit:1,
        title:`Design a Java class MathOperations`,
        code:`
        class MathOperations {
            public final double PI = 3.141592;
            public final double PI_2 = 0.31818181818;
            public final double SQRT2 = 1.41421356237;
            public final double SQRT1_2 = 0.70710678118;
        
            public static void max(int a, int b) {
                if (a > b) {
                    System.out.println(a + " is maximum");
                } else {
                    System.out.println(b + " is maximum");
                }
            }
        
            public static void max(int a, int b, int c) {
                if (a > b && a > c) {
                    System.out.println(a + " is maximum");
                } else if (b > a && b > c) {
                    System.out.println(b + " is maximum");
                } else {
                    System.out.println(c + " is maximum");
                }
            }
        
            public static void min(int a, int b) {
                if (a < b) {
                    System.out.println(a + " is minimum");
                } else {
                    System.out.println(b + " is minimum");
                }
            }
        
            public static void min(int a, int b, int c) {
                if (a < b && a < c) {
                    System.out.println(a + " is minimum");
                } else if (b < a && b < c) {
                    System.out.println(b + " is minimum");
                } else {
                    System.out.println(c + " is minimum");
                }
            }
        
            public static void factorial(int n) {
                int fact = 1;
                int i;
                for (i = 1; i <= n; i++) {
                    fact = i * fact;
                }
                System.out.println("The factorial of " + n + " is " + fact);
            }
        
            public static void main(String args[]) {
                MathOperations m = new MathOperations();
                System.out.println(m.PI);
                System.out.println(m.PI_2);
                System.out.println(m.SQRT2);
                System.out.println(m.SQRT1_2);
        
                max(4, 5);
                max(4, 5, 3);
                min(1, 2);
                min(4, 5, 3);
                factorial(5);
            }
        }
        
        `,
    },
    {
        unit:1,
        title:`cylinder, circle, shapes2d, shapes3d`,
        code:`
        //--------------------Cricle.java--------------------------
        package shapes;
        
        interface shape2d {
            public double getSurfaceArea();
        
            public double getPerimeter();
        }
        
        interface shape3d {
            public double getVolume();
        }
        
        public class circle implements shape2d {
            private double rad;
        
            public circle(double r) {
                rad = r;
            }
        
            public circle() {
                rad = 0.0;
            }
        
            public double getRadius() {
                return rad;
            }
        
            public double getSurfaceArea() {
                return 3.14 * this.rad * this.rad;
            }
        
            public double getPerimeter() {
                return 2 * 3.14 * this.rad;
            }
        
            public String toString() {
                return "circle with radius is" + " " + getRadius();
            }
        }
        // --------------------Cylinder.java--------------------------
        package shapes;
        
        public class cylinder extends circle implements shape3d{
            private double ht;
            double ra;
            public cylinder(){
               super(0);
                ht=0.0;
            }
            public cylinder(double r,double h){
               super(r);
                ht=h;
            }
            public double getHeight(){
                return ht;
            }
            public double getVolume(){
                return Math.PI*super.getRadius()*super.getRadius()*this.ht;
            }
            public String toString(){
                return "cylinder with radius "+super.getRadius()+"and the height="+getHeight();
            }
        }
        
        // --------------------testShapes.java--------------------------
        import shapes.circle;
        import shapes.cylinder;
        import java.util.Scanner;
        
        class testshapes {
            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                System.out.println("enter rad for circle");
                circle c = new circle(sc.nextDouble());
                System.out.println(c);
                System.out.println("area =" + c.getSurfaceArea());
                System.out.println("permeter=" + c.getPerimeter());
                System.out.println("enter hgt for cylinder");
                cylinder cy = new cylinder(c.getRadius(), sc.nextDouble());
        
                System.out.println("the volume=" + cy.getVolume());
                System.out.println("the area by clin for circle is=" + cy.getSurfaceArea());
            }
        }
        `,
    },
    {
        unit:1,
        title:`Design a StackException class which extends Exception`,
        code:`
        class StackException extends Exception {
            private String msg;
        
            StackException() {
                msg = " OOPS! an error occured ";
            }
        
            StackException(String msg) {
                this.msg = msg;
            }
        
            String getter() {
                return msg;
            }
        
            void setter(String msg) {
                this.msg = msg;
            }
        
            public String toString() {
                return msg;
            }
        }
        
        class Stack {
            private int arr[] = new int[5];
            private int top;
        
            Stack() {
                top = -1;
            }
        
            void push(int ele) throws StackException {
                if (top == 4) {
                    StackException e = new StackException(" OOPS! it's an Overflow ");
                    throw e;
                } else {
                    arr[++top] = ele;
                }
            }
        
            int pop() throws StackException {
                if (top == -1) {
                    StackException e = new StackException(" OOPS! it's an Underflow ");
                    throw e;
                }
                return arr[top--];
            }
        
        }
        
        class Testing {
            public static void main(String args[]) {
                int i;
                Stack s1 = new Stack();
                for (i = 0; i < 6; i++) {
                    try {
                        s1.push(1);
                    } catch (StackException e) {
                        System.out.println(e);
                    }
                }
                for (i = 0; i < 6; i++) {
                    try {
                        System.out.println(s1.pop());
                    } catch (StackException e) {
                        System.out.println(e);
                    }
                }
            }
        }
        
        `,
    },
    {
        unit:1,
        title:`Implement Producer Consumer problem`,
        code:`
        class Q {
            int n;
            boolean status = false;
        
            synchronized void put(int n) {
                if (status == true)
                    try {
                        wait();
                    } catch (InterruptedException e) {
                        System.out.println(e);
                    }
                this.n = n;
                status = true;
                System.out.println("Put " + n);
                notify();
            }
        
            synchronized int get() {
                if (status == false)
                    try {
                        wait();
                    } catch (InterruptedException e) {
                        System.out.println(e);
                    }
                status = false;
                System.out.println("Got " + n);
                notify();
                return n;
            }
        }
        
        class producer extends Thread {
            Q buff;
        
            producer(Q q) {
                buff = q;
            }
        
            public void run() {
                int i = 1;
                while (true) {
                    buff.put(i++);
                }
            }
        }
        
        class consumer extends Thread {
            Q buff;
        
            consumer(Q q) {
                buff = q;
            }
        
            public void run() {
                while (true) {
                    buff.get();
                }
            }
        }
        
        class dem_TC {
            public static void main(String arg[]) {
                Q q = new Q();
                producer p = new producer(q);
                consumer c = new consumer(q);
                c.start();
                p.start();
            }
        }
        `,
    },
    {
        unit:2,
        title:`Applet program to display the house using Graphics`,
        code:`
        import java.awt.Color;
        import java.awt.Graphics;
        import java.awt.Polygon;
        import java.applet.Applet;

        /*
        <applet code="house.class" width=400 height=300>
        </applet>
        */
        public class house extends Applet {
            public void paint(Graphics g) {
                // house base
                g.setColor(Color.red);
                g.fillRect(50, 90, 200, 100);
                // house outlines
                g.setColor(Color.blue);
                g.drawRect(50, 90, 200, 100);
                // roof
                Polygon roof = new Polygon();
                roof.addPoint(50, 90);
                roof.addPoint(150, 150);
                roof.addPoint(250, 90);
                g.setColor(new Color(218, 165, 32));
                g.fillPolygon(roof);
                g.setColor(Color.black);
                g.drawPolygon(roof);

                // windows
                g.setColor(Color.blue);
                g.drawLine(75, 123, 105, 123);
                g.drawLine(190, 110, 190, 134);
                g.fillRect(70, 110, 5, 25);
                g.fillRect(105, 110, 5, 25);

            }
        }
        `,
    },
    {
        unit:2,
        title:`Applet that displays a scrolling or animated banner with text.`,
        code:`
        import java.awt.*;

        import java.applet.Applet;
        
        /*
        <applet code="textBanner.class" width=400 height=300>
        </applet>
        */
        public class textBanner extends Applet implements Runnable {
            String ss;
        
            public void init() {
                ss = "Hi How are you";
                try {
                    Thread t = new Thread(this);
                    t.start();
                } catch (Exception e) {
                    System.out.println(e);
                }
            }
        
            public void paint(Graphics g) {
                g.drawString(ss, 20, 30);
                g.setFont(new Font("Arial", Font.PLAIN, 30));
            }
        
            public void run() {
                while (true) {
                    char c = ss.charAt(0);
                    String s1 = ss.substring(1, ss.length());
                    ss = s1 + c;
                    repaint();
                    try {
                        Thread.sleep(1000);
                    } catch (Exception e) {
                        System.out.println(e);
                    }
                }
            }
        }
        `,
    },
    {
        unit:2,
        title:`a login form with fields for username and password.`,
        code:`
        import java.awt.event.*;
        import javax.swing.*;
        import java.awt.*;
        
        public class login extends JFrame implements ActionListener {
            Button b1, b2;
            TextField u;
            JPasswordField p;
            JLabel us, pa, er;
        
            public login() {
                setLayout(new FlowLayout());
                b1 = new Button("SUBMIT");
                b2 = new Button("CLEAR");
                b1.addActionListener(this);
                b2.addActionListener(this);
                u = new TextField(20);
                p = new JPasswordField(16);
                us = new JLabel("Username");
                pa = new JLabel("password");
                JPanel p1 = new JPanel(new FlowLayout());
                p1.add(us);
                p1.add(u);
                p1.add(pa);
                p1.add(p);
                p1.add(b1);
                p1.add(b2);
                add(p1);
                er = new JLabel();
                add(er);
                setBounds(100, 100, 400, 300);
                setVisible(true);
            }
        
            public static void main(String arg[]) {
                new login();
            }
        
            public void actionPerformed(ActionEvent e) {
                String s = e.getActionCommand();
                String usr, pass;
                usr = u.getText();
                pass = new String(p.getPassword());
                if (s.equals("SUBMIT")) {
                    if (usr.isEmpty() || pass.isEmpty())
                        er.setText("ENTER ALL FIELDS");
                    else if ((usr.equals("y22cm107")) && (pass.equals("1234")))
                        er.setText("Loggined succesfully");
                    else
                        er.setText("Username or Password is incorrect");
                } else if (s.equals("CLEAR")) {
                    u.setText("");
                    p.setText("");
                    er.setText("");
                }
            }
        }
        `,
    },
    {
        unit:2,
        title:`JTree`,
        code:`
        import javax.swing.*;
        import javax.swing.JFrame;
        import javax.swing.JScrollPane;
        import javax.swing.tree.DefaultMutableTreeNode;
        
        /*
         <applet code="jtree.class" width=400 height=300>
         </applet>
        */
        public class jtree extends JFrame {
            JTree tree;
        
            public jtree() {
                super("JTREE");
                DefaultMutableTreeNode root = new DefaultMutableTreeNode("RVRJC");
        
                DefaultMutableTreeNode cb = new DefaultMutableTreeNode("Circuit branches");
                root.add(cb);
        
                DefaultMutableTreeNode cs = new DefaultMutableTreeNode("Computer sciemce");
                cb.add(cs);
                DefaultMutableTreeNode cse = new DefaultMutableTreeNode("CSE");
                cs.add(cse);
                DefaultMutableTreeNode cm = new DefaultMutableTreeNode("CSE(AI&ML)");
                cs.add(cm);
                DefaultMutableTreeNode csd = new DefaultMutableTreeNode("CSE(DS)");
                cs.add(csd);
        
                DefaultMutableTreeNode ncs = new DefaultMutableTreeNode("Non Circuit Branches");
                root.add(ncs);
        
                DefaultMutableTreeNode ece = new DefaultMutableTreeNode("ECE");
                ncs.add(ece);
                DefaultMutableTreeNode eee = new DefaultMutableTreeNode("EEE");
                ncs.add(eee);
        
                tree = new JTree(root);
                JScrollPane jsp = new JScrollPane(tree);
                add(jsp);
                setVisible(true);
            }
        
            public static void main(String args[]) {
                new jtree();
            }
        }
        
        `,
    },
    {
        unit:2,
        title:`Design JTabbedPane with three tabs`,
        code:`
        import javax.swing.*;
        import java.awt.FlowLayout;
        import java.awt.GridLayout;
        
        public class tabs {
            public static void main(String args[]) {
                JFrame frame = new JFrame("Jtabs");
                frame.setSize(400, 300);
                frame.setLayout(new FlowLayout());
        
                JTabbedPane pane = new JTabbedPane();
        
                JPanel panel1 = new JPanel();
                panel1.setLayout(new GridLayout(4, 1));
                JCheckBox cb1 = new JCheckBox("Math-I");
                JCheckBox cb2 = new JCheckBox("Chemistry");
                JCheckBox cb3 = new JCheckBox("FCS");
                JCheckBox cb4 = new JCheckBox("ESCC");
                panel1.add(cb1);
                panel1.add(cb2);
                panel1.add(cb3);
                panel1.add(cb4);
        
                JPanel panel2 = new JPanel();
                panel2.setLayout(new GridLayout(4, 1));
                JRadioButton rb1 = new JRadioButton("Math-II");
                JRadioButton rb2 = new JRadioButton("physics");
                JRadioButton rb3 = new JRadioButton("Data Structures");
                JRadioButton rb4 = new JRadioButton("Python");
                panel2.add(rb1);
                panel2.add(rb2);
                panel2.add(rb3);
                panel2.add(rb4);
        
                JPanel panel3 = new JPanel();
                panel3.setLayout(new GridLayout());
                String[] data = {
                        "statistics",
                        "oops",
                        "dbms",
                        "dms"
                };
                JList<String> list = new JList<>(data);
                panel3.add(list);
        
                pane.addTab("1 year 1 sem courses", panel1);
                pane.addTab("1 year 2 sem courses", panel2);
                pane.addTab("2 year 1 sem courses", panel3);
        
                frame.add(pane);
                frame.setVisible(true);
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            }
        }
        
        `,
    },
    {
        unit:2,
        title:`Display the following Data with JTable`,
        code:`
        import javax.swing.*;

        public class jtable extends JFrame {
            public jtable() {
                super("j table ");
                setBounds(100, 100, 400, 300);
                String[][] data = {
                        { "1", "e1", "mohan", "1000" },
                        { "1", "e1", "mohan", "1000" },
                        { "1", "e1", "mohan", "1000" },
                        { "1", "e1", "mohan", "1000" }
                };
                String header[] = { "sno", "employee id", "name", "salary" };
                JTable jt = new JTable(data, header);
                JScrollPane jsp = new JScrollPane(jt);
                add(jsp);
                setVisible(true);
            }
        
            public static void main(String args[]) {
                new jtable();
            }
        }
        `,
    },
    {
        unit:1,
        title:`Create a generic function to sort n integers`,
        code:`
        import java.util.Arrays;

        public class Sort {

            public static void main(String[] args) {
                int[] numbers = {5, 2, 8, 1, 7};
                
                System.out.print("Original array: ");
                printArray(numbers);
                
                genericSort(numbers);
                
                System.out.print("Sorted array: ");
                printArray(numbers);
            }

            public static void genericSort(int[] arr) {
                Arrays.sort(arr);
            }

            public static void printArray(int[] arr) {
                for (int i=0; i<arr.length;i++) {
                    System.out.print(arr[i] + " ");
                }
                System.out.println();
            }
        }`
    },
    {
        unit:1,
        title:`Simple Calculator`,
        code:`
import java.awt.*;
import java.awt.event.*;

public class calsopr extends Frame implements ActionListener {
    String val, op;
    Button b1[] = new Button[16];
    TextField tx1;
    Panel p1;
    int F, S, R, C;

    public calsopr() {
        val = "0";
        op = "";
        F = S = R = C = 0;
        p1 = new Panel();
        tx1 = new TextField("0", 15);
        tx1.setEditable(false);
        p1.setLayout(new GridLayout(4, 4, 5, 5)); // Use setLayout instead of setEditable
        for (int i = 0; i < 10; i++) {
            b1[i] = new Button("" + i); // Remove the space before the numbers
            b1[i].addActionListener(this);
        }
        b1[10] = new Button("+");
        b1[10].addActionListener(this);
        b1[11] = new Button("-");
        b1[11].addActionListener(this);
        b1[12] = new Button("*");
        b1[12].addActionListener(this);
        b1[13] = new Button("/");
        b1[13].addActionListener(this);
        b1[14] = new Button("=");
        b1[14].addActionListener(this);
        b1[15] = new Button("C");
        b1[15].addActionListener(this);
        for (int i = 0; i < 16; i++) {
            p1.add(b1[i]);
        }
        add(tx1, BorderLayout.NORTH);
        add(p1, BorderLayout.CENTER);
        setSize(200, 200);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent ae) {
        String type = ae.getActionCommand();
        if (type.equals("+") || type.equals("-") || type.equals("*") || type.equals("/"))
            op = type;
        if (type.matches("\\d")) {
            tx1.setText(type);
            if (C == 0) {
                F = Integer.parseInt(tx1.getText());
                C = 1;
            } else {
                S = Integer.parseInt(tx1.getText());
                C = 0;
            }
        }
        if (type.equals("=")) {
            if (op.equals("+")) {
                R = F + S;
            } else if (op.equals("-")) {
                R = F - S;
            } else if (op.equals("*")) {
                R = F * S;
            } else if (op.equals("/")) {
                if (S != 0) {
                    R = F / S;
                } else {
                    // Handle division by zero error
                    tx1.setText("Error");
                    return;
                }
            }
            tx1.setText("" + R);
        }
        if (type.equals("C")) {
            F = S = R = 0;
            C = 0;
            tx1.setText("0");
        }
    }

    public static void main(String s[]) {
        new calsopr();
    }
}

        `,
    },
]