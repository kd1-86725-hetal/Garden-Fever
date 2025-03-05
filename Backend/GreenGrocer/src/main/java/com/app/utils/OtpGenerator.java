package com.app.utils;

import java.util.Random;

public class OtpGenerator {
	Random rs=new Random();
	int otp=0;
	
	public String GenerateOtp()
	{
		for(int i=0;i<6;i++)
		{
			otp=otp*10+rs.nextInt(10);
		}
		String finalotp=Integer.toString(otp);
		return finalotp;
	}
}

