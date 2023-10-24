package org.dhbw.softwarengineering.prototype.mail.integration;

import java.util.Properties;

public class MailIntegration {
    public static void getMail(String host, String userName, String password){

        //properties
        Properties properties = new Properties();
        properties.put("mail.store.protocol", "pop3");
        properties.put("mail.pop3.host", host);
        properties.put("port", "995");
        properties.put("mail.pop3.starttls.enable", "true");

        //abbruch wegen sehr alter liberry
    }
}
