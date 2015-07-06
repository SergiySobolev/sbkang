import com.google.common.annotations.VisibleForTesting;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

public class ProfileTest {

    @Autowired
    Environment environment;

    @Test
    public void showActiveProfiles(){
        for (final String profileName : environment.getActiveProfiles()) {
            System.out.println("Currently active profile - " + profileName);
        }
    }
}
