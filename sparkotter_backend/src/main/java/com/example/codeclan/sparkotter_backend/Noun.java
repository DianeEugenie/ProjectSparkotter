package com.example.codeclan.sparkotter_backend;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public enum Noun {
    YOUTH ("Youth"),
    MENU ("Menu"),
    EMPLOYMENT ("Employment"),
    GUIDANCE ("Guidance"),
    DEVICE ("Device"),
    JUDGMENT ("Judgment"),
    MEDICINE ("Medicine"),
    SATISFACTION ("Satisfaction"),
    IDEA ("Idea"),
    MOM ("Mom"),
    TRUTH ("Truth"),
    SCENE ("Scene"),
    STATEMENT ("Statement"),
    ATTENTION ("Attention"),
    EAR ("Ear"),
    HEARING ("Hearing"),
    BASIS ("Basis"),
    CONNECTION ("Connection"),
    ECONOMICS ("Economics"),
    CHURCH ("Church"),
    ENTHUSIASM ("Enthusiasm"),
    LEADERSHIP ("Leadership"),
    HIGHWAY ("Highway"),
    PERSON ("Person"),
    ANXIETY ("Anxiety"),
    MARRIAGE ("Marriage"),
    REPLACEMENT ("Replacement"),
    SOLUTION ("Solution"),
    HEART ("Heart"),
    TELEVISION ("Television"),
    REPUTATION ("Reputation"),
    REALITY ("Reality"),
    INFLATION ("Inflation"),
    CONTRIBUTION ("Contribution"),
    DESK ("Desk"),
    THANKS ("Thanks"),
    PEOPLE ("People"),
    PAINTING ("Painting"),
    SYMPATHY ("Sympathy"),
    USER ("User"),
    PASSENGER ("Passenger"),
    TENSION ("Tension"),
    YEAR ("Year"),
    CHEST ("Chest"),
    MEMORY ("Memory"),
    TONGUE ("Tongue"),
    PHONE ("Phone"),
    RECOGNITION ("Recognition"),
    SITUATION ("Situation"),
    WORLD ("World"),
    PIE ("Pie"),
    THEORY ("Theory"),
    SHOPPING ("Shopping"),
    GIRL ("Girl"),
    FAMILY ("Family"),
    DIRECTOR ("Director"),
    PERSPECTIVE ("Perspective"),
    COMPARISON ("Comparison"),
    ROLE ("Role"),
    MEDIA ("Media"),
    HEALTH ("Health"),
    COFFEE ("Coffee"),
    VARIATION ("Variation"),
    SESSION ("Session"),
    FOOTBALL ("Football"),
    BREATH ("Breath"),
    ANALYST ("Analyst"),
    BIRTHDAY ("Birthday"),
    DIRT ("Dirt"),
    ABILITY ("Ability"),
    PERFORMANCE ("Performance"),
    NATURE ("Nature"),
    COUNTY ("County"),
    CANCER ("Cancer"),
    MODE ("Mode"),
    PRODUCT ("Product"),
    DAD ("Dad"),
    CELL ("Cell"),
    MALL ("Mall"),
    BUYER ("Buyer"),
    FARMER ("Farmer"),
    BREAD ("Bread"),
    ATTITUDE ("Attitude"),
    MAINTENANCE ("Maintenance"),
    VARIETY ("Variety"),
    RESTAURANT ("Restaurant"),
    DIAMOND ("Diamond"),
    CIGARETTE ("Cigarette"),
    WRITER ("Writer"),
    LOCATION ("Location"),
    POEM ("Poem"),
    EXPRESSION ("Expression"),
    IMPROVEMENT ("Improvement"),
    MEAL ("Meal"),
    STRANGER ("Stranger"),
    LAW ("Law"),
    SINGER ("Singer"),
    DESCRIPTION ("Description"),
    COOKIE ("Cookie"),
    CELEBRATION ("Celebration"),
    REVOLUTION ("Revolution"),
    BEDROOM ("Bedroom"),
    ELEVATOR ("Elevator"),
    NEGOTIATION ("Negotiation"),
    HAIR ("Hair"),
    INTRODUCTION ("Introduction"),
    CONCEPT ("Concept"),
    PROFESSION ("Profession"),
    CHARITY ("Charity"),
    REQUIREMENT ("Requirement"),
    PSYCHOLOGY ("Psychology"),
    COLLECTION ("Collection"),
    DISASTER ("Disaster"),
    KNOWLEDGE ("Knowledge"),
    SOFTWARE ("Software"),
    DEBT ("Debt"),
    PIZZA ("Pizza"),
    WOMAN ("Woman"),
    INTERNET ("Internet"),
    ANALYSIS ("Analysis"),
    HISTORIAN ("Historian"),
    EFFORT ("Effort"),
    SCIENCE ("Science"),
    PASSION ("Passion"),
    SPEECH ("Speech"),
    CLIMATE ("Climate"),
    THROAT ("Throat"),
    MUSIC ("Music"),
    POLLUTION ("Pollution"),
    POETRY ("Poetry"),
    MIDNIGHT ("Midnight"),
    LAKE ("Lake"),
    PHYSICS ("Physics"),
    PROFESSOR ("Professor"),
    SECTOR ("Sector"),
    REGION ("Region"),
    LADDER ("Ladder"),
    TRANSPORTATION ("Transportation"),
    SPEAKER ("Speaker"),
    MONTH ("Month"),
    PIANO ("Piano"),
    CHEEK ("Cheek"),
    CANDIDATE ("Candidate"),
    RECORDING ("Recording"),
    EMPLOYER ("Employer"),
    TEA ("Tea"),
    HOTEL ("Hotel"),
    WIFE ("Wife"),
    INJURY ("Injury"),
    TEACHER ("Teacher"),
    PREFERENCE ("Preference"),
    OVEN ("Oven"),
    SECRETARY ("Secretary"),
    GROWTH ("Growth"),
    VERSION ("Version"),
    DRAWING ("Drawing"),
    AREA ("Area"),
    STUDIO ("Studio"),
    ARTICLE ("Article"),
    SAFETY ("Safety"),
    MEAT ("Meat"),
    WEDDING ("Wedding"),
    STUDENT ("Student"),
    SURGERY ("Surgery"),
    PROMOTION ("Promotion"),
    EVENT ("Event"),
    MAGAZINE ("Magazine"),
    REPUBLIC ("Republic"),
    CHILD ("Child"),
    LOSS ("Loss"),
    ASSISTANCE ("Assistance"),
    CHAPTER ("Chapter"),
    CAMERA ("Camera"),
    KING ("King"),
    HOMEWORK ("Homework"),
    UNDERSTANDING ("Understanding"),
    EXCITEMENT ("Excitement"),
    CHAMPIONSHIP ("Championship"),
    PRESENTATION ("Presentation"),
    SALAD ("Salad"),
    UNCLE ("Uncle"),
    ASSUMPTION ("Assumption"),
    WINNER ("Winner"),
    FOUNDATION ("Foundation"),
    CHEMISTRY ("Chemistry"),
    PLATFORM ("Platform"),
    SUGGESTION ("Suggestion"),
    ACCIDENT ("Accident"),
    INSPECTION ("Inspection"),
    COUSIN ("Cousin"),
    NATION ("Nation"),
    GROCERY ("Grocery"),
    PROCEDURE ("Procedure"),
    QUALITY ("Quality"),
    NEWS ("News"),
    DATA ("Data"),
    DINNER ("Dinner"),
    PRIORITY ("Priority"),
    GIRLFRIEND ("Girlfriend"),
    STRATEGY ("Strategy"),
    CLIENT ("Client"),
    DEPRESSION ("Depression"),
    POPULATION ("Population"),
    TOOTH ("Tooth"),
    AD ("Ad"),
    INSECT ("Insect"),
    BATHROOM ("Bathroom"),
    LENGTH ("Length"),
    ARGUMENT ("Argument"),
    INDUSTRY ("Industry"),
    RECEPTION ("Reception"),
    DECISION ("Decision"),
    ASPECT ("Aspect"),
    ESTABLISHMENT ("Establishment"),
    APPOINTMENT ("Appointment"),
    EMOTION ("Emotion"),
    NEWSPAPER ("Newspaper"),
    AFFAIR ("Affair"),
    STORY ("Story"),
    PERCENTAGE ("Percentage"),
    TENNIS ("Tennis"),
    EQUIPMENT ("Equipment"),
    OUTCOME ("Outcome"),
    DISK ("Disk"),
    COMPUTER ("Computer"),
    INFORMATION ("Information"),
    CLOTHES ("Clothes"),
    PERMISSION ("Permission"),
    READING ("Reading"),
    FREEDOM ("Freedom"),
    FRIENDSHIP ("Friendship"),
    WEEK ("Week"),
    PROBLEM ("Problem"),
    RELATIONSHIP ("Relationship"),
    MESSAGE ("Message"),
    FEEDBACK ("Feedback"),
    OPERATION ("Operation"),
    DRAMA ("Drama"),
    WOOD ("Wood"),
    SUPERMARKET ("Supermarket"),
    BOYFRIEND ("Boyfriend"),
    MOOD ("Mood"),
    PRESENCE ("Presence"),
    REACTION ("Reaction"),
    SON ("Son"),
    ENTERTAINMENT ("Entertainment"),
    INTENTION ("Intention"),
    STORAGE ("Storage"),
    HEIGHT ("Height"),
    SIGNIFICANCE ("Significance"),
    ATMOSPHERE ("Atmosphere"),
    TOPIC ("Topic"),
    DISEASE ("Disease"),
    GOVERNMENT ("Government"),
    ORANGE ("Orange"),
    REFLECTION ("Reflection"),
    COURAGE ("Courage"),
    LITERATURE ("Literature"),
    PAYMENT ("Payment"),
    AUDIENCE ("Audience"),
    INDICATION ("Indication"),
    POSSESSION ("Possession"),
    PHOTO ("Photo"),
    EXAM ("Exam"),
    EDITOR ("Editor"),
    TECHNOLOGY ("Technology"),
    TWO ("Two"),
    RESPONSE ("Response"),
    EXPLANATION ("Explanation"),
    BATH ("Bath"),
    GOAL ("Goal"),
    ENTRY ("Entry"),
    FOOD ("Food"),
    FUNERAL ("Funeral"),
    TRADITION ("Tradition"),
    ADDITION ("Addition"),
    SOCIETY ("Society"),
    INSPECTOR ("Inspector"),
    SONG ("Song"),
    MUD ("Mud"),
    INVESTMENT ("Investment"),
    HAT ("Hat"),
    PENALTY ("Penalty"),
    COLLEGE ("College"),
    ALCOHOL ("Alcohol"),
    HONEY ("Honey"),
    MANAGER ("Manager"),
    SIR ("Sir"),
    LANGUAGE ("Language"),
    POLITICS ("Politics"),
    RIVER ("River"),
    ADVERTISING ("Advertising"),
    EMPHASIS ("Emphasis"),
    SYSTEM ("System"),
    HOSPITAL ("Hospital"),
    QUANTITY ("Quantity"),
    ASSIGNMENT ("Assignment"),
    GARBAGE ("Garbage"),
    GATE ("Gate"),
    DRAWER ("Drawer"),
    ;

    private String name;
    private static final List<Noun> values = new ArrayList<>(Arrays.asList(Noun.values()));
    private static final int length = values.size();
    private static final Random RANDOM = new Random();

    Noun(String name) {
        this.name=name;
    }

    public String getValue(){
        return name;
    }

    public static String getRandom()  {
        Noun noun = values.get(RANDOM.nextInt(length));
        return noun.getValue();
    }
}
