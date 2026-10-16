package com.educainstitute.app;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Toast;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private long lastBackPressTime = 0;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        try {
            WebView webView = getBridge().getWebView();
            if (webView != null) {
                WebSettings settings = webView.getSettings();
                settings.setDomStorageEnabled(true);
                settings.setDatabaseEnabled(true);
                settings.setCacheMode(WebSettings.LOAD_DEFAULT);
                settings.setUseWideViewPort(true);
                settings.setLoadWithOverviewMode(true);
                webView.setVerticalScrollBarEnabled(true);
                webView.setHorizontalScrollBarEnabled(false);
                webView.setOverScrollMode(WebView.OVER_SCROLL_IF_CONTENT_SCROLLS);
                webView.setScrollBarStyle(WebView.SCROLLBARS_INSIDE_OVERLAY);
            }
        } catch (Exception ignored) {}
    }

    @Override
    public void onBackPressed() {
        try {
            WebView webView = getBridge().getWebView();
            if (webView != null) {
                webView.evaluateJavascript("(function(){ if (window.__handleAppBack) { return window.__handleAppBack(); } return false; })()", value -> {
                    // Check if JS handled the back button (closed modal/drawer or returned to home)
                    if ("true".equals(value) || "\"true\"".equals(value)) {
                        return;
                    }

                    if (webView.canGoBack()) {
                        webView.goBack();
                        return;
                    }

                    // Root screen: Double press back within 2s to exit
                    long currentTime = System.currentTimeMillis();
                    if (currentTime - lastBackPressTime < 2000) {
                        finish();
                    } else {
                        lastBackPressTime = currentTime;
                        Toast.makeText(MainActivity.this, "Press back again to exit Educa App", Toast.LENGTH_SHORT).show();
                    }
                });
                return;
            }
        } catch (Exception ignored) {}

        super.onBackPressed();
    }
}
