package com.example.codeclan.sparkotter_backend;


import java.util.*;

public enum Adjective {
    KNOWN ("Known"),
    INTELLIGENT("Intelligent"),
    RESPONSIBLE("Responsible"),
    NUMEROUS("Numerous"),
    USED("Used"),
    HUNGRY("Hungry"),
    ANXIOUS("Anxious"),
    HOT("Hot"),
    CAPABLE("Capable"),
    VISIBLE("Visible"),
    ACCEPTABLE("Acceptable"),
    CULTURAL("Cultural"),
    UNABLE("Unable"),
    FORMER("Former"),
    FEDERAL("Federal"),
    VARIOUS("Various"),
    EMOTIONAL("Emotional"),
    EVERY("Every"),
    CONSCIOUS("Conscious"),
    SEVERE("Severe"),
    UNUSUAL("Unusual"),
    SUCCESSFULLY("Successfully"),
    HELPFUL("Helpful"),
    HUGE("Huge"),
    EASTERN("Eastern"),
    AFRAID("Afraid"),
    ACCURATE("Accurate"),
    GUILTY("Guilty"),
    INTERESTING("Interesting"),
    SCARED("Scared"),
    DANGEROUS("Dangerous"),
    BASIC("Basic"),
    MASSIVE("Massive"),
    POPULAR("Popular"),
    MENTAL("Mental"),
    CAREFUL("Careful"),
    WONDERFUL("Wonderful"),
    FRIENDLY("Friendly"),
    ASLEEP("Asleep"),
    NICE("Nice"),
    ABLE("Able"),
    PLEASANT("Pleasant"),
    IMMEDIATE("Immediate"),
    CUTE("Cute"),
    POOR("Poor"),
    IMPORTANT("Important"),
    SUCCESSFUL("Successful"),
    INFORMAL("Informal"),
    CONSISTENT("Consistent"),
    TECHNICAL("Technical"),
    AWARE("Aware"),
    LOGICAL("Logical"),
    MEDICAL("Medical"),
    RELEVANT("Relevant"),
    BORING("Boring"),
    EMBARRASSED("Embarrassed"),
    ELECTRONIC("Electronic"),
    LATTER("Latter"),
    CONFIDENT("Confident"),
    FINANCIAL("Financial"),
    SUITABLE("Suitable"),
    TYPICAL("Typical"),
    DRAMATIC("Dramatic"),
    SUSPICIOUS("Suspicious"),
    IMPRESSIVE("Impressive"),
    SUBSTANTIAL("Substantial"),
    SIGNIFICANT("Significant"),
    INNER("Inner"),
    UGLY("Ugly"),
    SORRY("Sorry"),
    GLOBAL("Global"),
    SOUTHERN("Southern"),
    HISTORICAL("Historical"),
    TALL("Tall"),
    REASONABLE("Reasonable"),
    ODD("Odd"),
    OBVIOUS("Obvious"),
    LEGAL("Legal"),
    SIMILAR("Similar"),
    DIFFICULT("Difficult"),
    POWERFUL("Powerful"),
    RARE("Rare"),
    POLITICAL("Political"),
    NERVOUS("Nervous"),
    PURE("Pure"),
    ALIVE("Alive"),
    UNITED("United");

    private String name;
    private static final List<Adjective> values = new ArrayList<>(Arrays.asList(Adjective.values()));
    private static final int length = values.size();
    private static final Random RANDOM = new Random();

    Adjective(String name) {
        this.name=name;
    }

    public String getName() {
        return name;
    }

    public static List<Adjective> getValues() {
        return values;
    }

    public static String getRandom()  {
        Adjective adjective = values.get(RANDOM.nextInt(length));
        return adjective.getName();
    }
}
