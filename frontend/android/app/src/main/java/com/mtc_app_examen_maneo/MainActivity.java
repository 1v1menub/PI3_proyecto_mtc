package com.mtc_app_examen_maneo;

import com.reactnativenavigation.NavigationActivity;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

public class MainActivity extends NavigationActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this, R.id.lottie); // here
    SplashScreen.setAnimationFinished(false); // If you want the animation dialog to be forced to close when hide is called, use this code
    super.onCreate(savedInstanceState);
  }
}
